#coding: utf-8

import json

from jinja2 import Environment, FileSystemLoader

# Texte > Liste

def getList(filename):
    res = []

    with open(f"data/{filename}.txt", "r") as fTemp:
        for line in fTemp.readlines():
            res.append(line.strip())

        fTemp.close()

    return res

# JSON > Données

def getData(filename):
    with open(f"data/{filename}.json", "r") as fTemp:
        res = json.load(fTemp)

        fTemp.close()
    
    return res

# Template = Jinja > HTML

template_env = Environment(loader = FileSystemLoader(searchpath = "."))
template = template_env.get_template("site.jinja")

# Ecriture

with open("index.html", "w") as output_file:
    output_file.write(
        template.render(
            title = "La Savoie ou Bien ?",
            links = getData("links"),
            places = getData("places"),
            services = getData("services"),
            gallery = getData("gallery"),
            reviews = getData("reviews"),
            options = getList("options"),
            socials = getList("socials")
        )
    )