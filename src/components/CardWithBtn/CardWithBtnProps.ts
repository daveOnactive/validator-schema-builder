export default interface CardWithBtnProps {
  title: string;
  onClose: () => null | undefined;
  data?: { message?: string; value?: number };
  [props: string]: unknown;
}
