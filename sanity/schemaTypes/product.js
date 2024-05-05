export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options : {
                hotspot: true,
            }
        }
    ]
}