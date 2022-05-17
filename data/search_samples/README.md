# Sample data from aoe.fi APIs

Sample data downloaded from the aoe.fi search API to be used in unit tests.

## search_luonto_perusopetus_opas.json

```
# Search terms: "luonto"
# Koulutusaste: Perusopetus
# Oppimateriaalin tyyppi: opas
# Sort: newest

curl -XPOST -H "Content-Type: application/json" https://aoe.fi/api/v2/search --data '{
    "filters": {
        "educationalLevels" : [
            "8cb1a02f-54cb-499a-b470-4ee980519707"
        ],
        "learningResourceTypes" : [
            "a31e360b-86ea-4857-bdd7-ac5253e7c1ec"
        ]
    },
    "from": 0,
    "keywords": "luonto",
    "size": 10,
    "sort": "newest"
}'
```

## search_tähtitiede_korkeakoulu_esitys_sovellus.json

```
# Search terms: "tähtitiede"
# Koulutusaste: korkeakoulutus
# Oppimateriaalin tyyppi: esitys, sovellus

curl -XPOST -H "Content-Type: application/json" https://aoe.fi/api/v2/search --data '{
    "filters": {
        "educationalLevels" : [
            "e5a48ada-3de0-4246-9b8f-32d4ff68e22f"
        ],
        "learningResourceTypes" : [
            "7be52f46-138d-482f-834e-5ea33d933c37",
            "d41d5e9d-bbf0-45f5-9985-eba4feb385f0"
        ]
    },
    "from": 0,
    "keywords": "tähtitiede",
    "size": 10,
    "sort": "relevance"
}'
```

## search_tekijänoikeudet_ammatillinen.json


```
# Search term: "tekijänoikeudet"
# Koulutusaste: ammatillinen koulutus

curl -XPOST -H "Content-Type: application/json" https://aoe.fi/api/v2/search --data '{
    "filters": {
        "educationalLevels" : [
            "010c6689-5021-4d8e-8c02-68a27cc5a87b"
        ]
    },
    "from": 0,
    "keywords": "tekijänoikeudet",
    "size": 10,
    "sort": "relevance"
}'
```

## material_*.json

These are the responses for `https://aoe.fi/api/v2/metadata/X` queries for the study materials referenced in the above search query responses.
