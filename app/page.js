import { BuyMeCoffee, Cover, Section, SocialNetworks, Title } from "@/components";

export default function Home() {
  return (
    <main>
      <Section>
        <Cover title="Evgeniy<br /> Kartavkin" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </main>
  )
}
