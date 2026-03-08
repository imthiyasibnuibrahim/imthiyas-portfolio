import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Our singleton type has a list item with a custom child
      S.listItem()
        .title('Global Site Settings')
        .id('siteSettings')
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // Document types which are not singletons
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId() as string)
      ),
    ])
