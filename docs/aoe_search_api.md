# aoe.fi search API

```
curl -XPOST -H "Content-Type: application/json" https://aoe.fi/api/v2/search --data '{
    "keywords": "kokki",
    "filters": {
        "educationalLevels": [
            "010c6689-5021-4d8e-8c02-68a27cc5a87b"
        ],
        "educationalRoles": [
            "582949cb-36a4-4053-9f2f-c53ae954a6ae"
        ]
    },
    "sort": "relevance"
}'
```

## Filters

Filter values are string arrays. Possible values for each filter are listed below.

| Label | Filter key name | Possible filter values | Sample |
| ----- | ----- | ----- | --- |
| Kieli | languages | "fi", "en", "sv" | `{"languages": ["fi"]}` |
| Koulutusaste | educationalLevels | [Codes](https://koodistot.suomi.fi/codescheme;registryCode=edtech;schemeCode=Koulutusaste) | |
| Oppiaine, tutkinto, tieteenala | educationalSubjects | [Codes](https://virkailija.opintopolku.fi/koodisto-service/rest/json/tieteenala/koodi), the key is "koodiArvo"  | |
| Oppimateriaalin tyyppi | learningResourceTypes | [Codes](https://koodistot.suomi.fi/codescheme;registryCode=edtech;schemeCode=MateriaalinTyyppi) | |
| Tekijä | authors | Person names | `{"authors": ["Melinda Möttönen]}` |
| Organisaatio | organizations | [Codes](https://virkailija.opintopolku.fi/organisaatio-service/rest/organisaatio/v4/hae?aktiiviset=true&suunnitellut=false&lakkautetut=false), more information at [Organisaatiopalvelu](https://wiki.eduuni.fi/display/OPHPALV/Organisaatiopalvelu) | |
| Kohderyhmä | educationalRoles | [Codes](https://koodistot.suomi.fi/codescheme;registryCode=edtech;schemeCode=EducationalRole) | |
| Avainsana | keywords | Either keywords as text or as references to [YSO ontology](https://finto.fi/yso/fi/). Not clear when to use which.  | `{"keywords": ["arviointikulttuuri", "//www.yso.fi/onto/yso/p28618", "//www.yso.fi/onto/yso/p6874"]}` |
| Käyttötarkoitus | educationalUses | [Codes](https://koodistot.suomi.fi/codescheme;registryCode=edtech;schemeCode=EducationalUse) | `{"educationalUses": ["80135e90-e23d-40e7-b375-7bc9871ed284"]}`|
| Saavutettavuuden este | accessibilityHazards | [Codes](https://koodistot.suomi.fi/codescheme;registryCode=edtech;schemeCode=SaavutettavuusEsteet) | `{"accessibilityHazards": ["b3293084-f161-4e86-8d68-139588769157"]}` |
| Saavutettavuuden ominaisuus | accessibilityFeatures | [Codes](https://koodistot.suomi.fi/codescheme;registryCode=edtech;schemeCode=AccessibilityFeatures) | `{"accessibilityFeatures": ["098c131b-7de2-49f1-aef9-508132bb46c6"]}` |
| Lisenssi | licenses | ? | `{"licenses": ["CCBYSA4.0"]}` |
| Tavoite ja sisältöalue | teaches | ? | `{"teaches": ["ravintolajacateringalanperustutkinto"]}` |


## Sort

* Relevanssi - { "sort": "relevance" }
* Uusin ensin - { "sort": "newest" }
* Vanhin ensin - { "sort": "oldest" }
* Suosituin - { "sort": "popularity" }
