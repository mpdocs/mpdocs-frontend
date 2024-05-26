import { Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Уууупс, страницы не существует!"
      extra={
        <Link href={"/"} type="primary">
          Вернуться на главную
        </Link>
      }
    />
  );
}
