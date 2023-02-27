import { Stack, Text, Card, Menu } from "@sanity/ui";
import imageUrlBuilder from "@sanity/image-url";
import { RiImage2Line } from "react-icons/ri";

const client = {
  projectId: "20l7h879",
  dataset: "production",
  apiVersion: "2022-06-01",
  useCdn: false,
};

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export function ImageObjectPreview(props) {
  return (
    <Stack style={{cursor: "pointer"}}>
      <Card padding={[1, 1, 1]}>
        <Stack space={[2, 2, 3]}>
          {props.renderDefault({
            ...props,
            title: props.title,
            subtitle: props.subtitle,
            media: RiImage2Line,
          })}
          {props.media ? (
            <img
              src={urlFor(props.media.asset._ref)}
              width="100%"
              style={{ border: "1px solid #eee" }}
            ></img>
          ) : (
            <Card>
              <div
                style={{
                  color: "#676767",
                  fontStyle: "italic",
                  padding: ".5em",
                  border: "1px dashed #ccc",
                  textAlign: "center",
                  fontSize: "14px"
                }}
              >
                Ingen bilde valgt
              </div>
            </Card>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}
