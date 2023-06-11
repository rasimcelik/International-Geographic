import requests
from bs4 import BeautifulSoup
import json

# Fetch HTML content
url = "https://en.wikipedia.org/wiki/South_America"
response = requests.get(url)
html_content = response.text

# Parse HTML using BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# Find all section headings
headings = soup.find_all("h2")
data = {}

# Loop through each heading and extract corresponding content
for heading in headings:
    # Extract the heading text
    title = heading.get_text().strip()
    
    # Find the next sibling until the next heading
    content = []
    sibling = heading.find_next_sibling()
    while sibling and sibling.name != "h2":
        content.append(sibling.get_text().strip())
        sibling = sibling.find_next_sibling()
    
    # Add the section to the data dictionary
    data[title] = content

# Save as JSON file
with open("south_america_sections.json", "w") as file:
    json.dump(data, file, indent=4)
