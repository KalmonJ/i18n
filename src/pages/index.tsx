import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const router = useRouter();

  const { t } = useTranslation("common");

  return (
    <>
      <button onClick={() => router.push("/", "/", { locale: "pt" })}>
        trocar locale usando push
      </button>
      <h1>i18n</h1>
      <h1>{t("welcome")}</h1>
      <p> a linguagem atual é:{router.locale}</p>

      <p> lista de linguagens:{router.locales}</p>

      <ul>
        {router.locales?.map((locale) => (
          <li key={locale}>
            <Link href="/" locale={locale}>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
