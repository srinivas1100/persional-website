const ProjectType = {
    Flutter: Symbol("flutter"),
    React: Symbol("react"),
    Node: Symbol("node"),
    Docker: Symbol("docker")
}

const Projects = [
    {
        "key": 1,
        "type": ProjectType.Flutter,
        "title": "Home automation",
        "images": [
            "", "", ""
        ],
        "short-description": "",
        "long-description": "",
        "futures": [],
        "technologys-used": [{

        }],
        "packages": [
            "node-mone",
            "styled-components",

        ],
        "servies": [
            "api-services",
            "google-apis",
            "local-storage",
            "local-auth",
            "cloud-functions"
        ],
        "environment": [
            "react",
            "mongodb",
            "express",
            "node.js"
        ],
        "roles-and-responsiblites": [
            "List your employer, staffing agency, or consulting firm(it's fine to create one if you were freelancing).",
            "List your job title.If you were self - employed, give yourself a standard job title.",
            "List the dates of employment.",
            "Add a short blurb describing the nature of your work.",
            "Include 3 - 6 bullet points detailing your most relevant accomplishments, starting with an action verb and include hard numbers and metrics.",
            "Use a resume checker to score your bullet points and give you personalized feedback.",
            "Read our tips on how to list contract work and self- employment on a resume.",

        ]
    }
]

export default Projects;