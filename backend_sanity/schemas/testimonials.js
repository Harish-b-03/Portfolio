export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "imageurl",
            title: "ImgURL",
            type: "image",
            options: {
                hotspot: true, // user will be allowed to crop while uploading
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string"
        },
    ]
}