// THIRD WAY
const titles = document.querySelectorAll(".countryName-h4");
const info = document.querySelectorAll(".countryInfo-p");

// fetch("../africa.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const heading = data.heading;
//     const entry = data.entry;
//     const combinedParagraph = entry.join(" "); // Join paragraphs with a space

//     titles.forEach((title) => {
//       title.innerHTML = heading;
//     });
//     info.innerHTML = combinedParagraph;
//   })
//   .catch((error) => console.error(error));

fetch("../australia_sections.json")
  .then((response) => response.json())
  .then((data) => {
    const accordionContainer = document.getElementById(
      "accordionPanelsStayOpenExample"
    );
    const sections = Object.entries(data).filter(([key]) => key !== "Contents");

    sections.forEach(([title, content]) => {
      // Remove extra characters from content
      const cleanedContent = content.map((paragraph) => {
        let cleanedParagraph = paragraph.replace(/\[\d+\]/g, ""); // emove [2], [30], etc.
        cleanedParagraph = cleanedParagraph.replace(/\[note \d+\]\s*/g, ""); // emove [note 2], [note 8], etc.
        cleanedParagraph = cleanedParagraph.replace("Main articles: ", ""); // Remove \u02bf, \u2018, etc.
        cleanedParagraph = cleanedParagraph.replace("Main article: ", ""); // Remove \u02bf, \u2018, etc.
        cleanedParagraph = cleanedParagraph.replace("See also: ", ""); // Remove \u02bf, \u2018, etc.
        cleanedParagraph = cleanedParagraph.replace("[citation needed] ", ""); // Remove \u02bf, \u2018, etc.

        return cleanedParagraph;
      });
      // Create accordion item
      const item = document.createElement("div");
      item.className = "accordion-item";

      // Create accordion header
      const header = document.createElement("h2");
      header.className = "accordion-header";

      const button = document.createElement("button");
      button.className = "accordion-button";
      button.type = "button";
      button.setAttribute("data-bs-toggle", "collapse");
      button.setAttribute("data-bs-target", `#${title.replace(/\s+/g, "")}`);
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-controls", title.replace(/\s+/g, ""));
      button.textContent = title;

      header.appendChild(button);

      // Create accordion content
      const contentContainer = document.createElement("div");
      contentContainer.id = title.replace(/\s+/g, "");
      contentContainer.className = "accordion-collapse collapse ";

      const contentBody = document.createElement("div");
      contentBody.className = "accordion-body";
      contentBody.textContent = cleanedContent.join("\n\n");

      contentContainer.appendChild(contentBody);

      // Append header and content to the item
      item.appendChild(header);
      item.appendChild(contentContainer);

      // Append the item to the accordion container
      accordionContainer.appendChild(item);
    });
  })
  .catch((error) => console.log(error));
