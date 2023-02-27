import {
  RiSettings3Line,
  RiLayoutBottom2Line,
  RiLayoutTop2Line,
  RiHome3Line,
} from "../node_modules/react-icons/ri";

export default (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Forside")
        .icon(RiHome3Line)
        .child(S.document().schemaType("frontPage").documentId("frontPage")),
      S.divider(),
      ...S.documentTypeListItems()
      .filter((listItem) => ["subPage"].includes(listItem.getId())),
      ...S.documentTypeListItems()
        .filter((listItem) => ["projectPage"].includes(listItem.getId())),
      S.divider(),
      ...S.documentTypeListItems()
        .filter((listItem) => !["siteSettings"].includes(listItem.getId()))
        .filter((listItem) => !["subPage"].includes(listItem.getId()))
        .filter((listItem) => !["projectPage"].includes(listItem.getId()))
        .filter((listItem) => !["frontPage"].includes(listItem.getId()))
        .filter((listItem) => !["siteHeader"].includes(listItem.getId()))
        .filter((listItem) => !["siteFooter"].includes(listItem.getId())),
      S.divider(),
      S.listItem()
        .title("Header")
        .icon(RiLayoutTop2Line)
        .child(S.document().schemaType("siteHeader").documentId("siteHeader")),
      S.listItem()
        .title("Footer")
        .icon(RiLayoutBottom2Line)
        .child(S.document().schemaType("siteFooter").documentId("siteFooter")),
      S.listItem()
        .title("Innstillinger for nettsiden")
        .icon(RiSettings3Line)
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
    ]);
