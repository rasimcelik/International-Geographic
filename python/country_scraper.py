import requests
import json

def generate_country_json():
    url = "https://restcountries.com/v3/all"
    response = requests.get(url)
    countries = response.json()

    country_data = {}

    for country in countries:
        country_name = country['name']['common']
        continent = country['region']

        # Retrieve Wikipedia link for the country
        wiki_link = f"https://en.wikipedia.org/wiki/{country_name}"

        if continent in country_data:
            country_data[continent][country_name] = wiki_link
        else:
            country_data[continent] = {country_name: wiki_link}

    with open("all_countries.json", "w") as json_file:
        json.dump(country_data, json_file, indent=4)

    print("JSON file generated successfully.")

generate_country_json()
