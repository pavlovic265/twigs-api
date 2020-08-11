import { URL, Label } from "core/entities";

export function mapUrl(urls: URL[], href: string): URL {
  const url = urls.find((url) => url.href === href);

  if (!url) {
    throw new Error("Url dose not exist");
  }

  return {
    id: url.id,
    href: url.href,
    title: url.title,
    labels: url.labels,
  } as URL;
}

export function mapUrls(urls: URL[]): URL[] {
  return urls.map(({ id, href, labels, title }: URL) => ({
    id,
    href,
    labels,
    title,
  }));
}

export function mapLabel(labels: Label[], value: string): Label {
  const label = labels.find((item) => item.value === value);

  if (!label) {
    throw new Error("Label dose not exist");
  }

  return {
    id: label.id,
    value: label.value,
    color: label.color,
  };
}

export function mapLabels(labels: Label[]): Label[] {
  return labels.map(({ id, value, color }: Label) => ({
    id,
    value,
    color,
  }));
}
