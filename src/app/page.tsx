import {
  Avatar,
  Button,
  Card,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { JSX, Fragment } from "react";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social, newsletter } from "@/app/resources/content";
import { ProjectsCarousel, SkillsCarousel, NewsletterAction } from "@/components/index";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      <Column className={styles.sidebar} flex={3}>
      {about.avatar.display && (
        <Column
          className={styles.avatar}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" />
          <Flex gap="8" vertical="center">
            <Icon onBackground="brand-weak" name="globe" />
            {person.location}
          </Flex>
          {person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language, index) => (
                <Tag key={index} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
        </Column>
      )}
      {about.tableOfContent.display && (
        <Column
          className={styles.tableOfContent}
          style={{ marginTop: "50px" }}
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      </Column>
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="m"
          >
            {about.calendar.display && (
              
              <Flex
                as="a"
                // @ts-ignore
                href={about.calendar.link}
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                  <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                  <Flex paddingX="8">Schedule a call</Flex>
                  <IconButton
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                    />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl" marginBottom="xs">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map((item) =>
                  item.link && (
                    <Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="secondary"
                      />
                      <IconButton
                        className="s-flex-show"
                        size="l"
                        href={item.link}
                        icon={item.icon}
                        variant="secondary"
                      />
                    </Fragment>
                  ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="l" padding="16">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" paddingX="16" marginBottom="m">
                {about.work.title}
              </Heading>
              {/* Carousel container with horizontal scroll */}
              <ProjectsCarousel projects={about.work.projects} />
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" paddingX="16" marginBottom="m" marginTop="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="m" paddingX="16">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginTop="m"
                marginBottom="m"
                paddingX="16"
              >
                {about.technical.title}
              </Heading>
              <SkillsCarousel skills={about.technical.skills} />
            </>
          )}

          {newsletter.display && (
            <NewsletterAction newsletter={newsletter} />
          )}
        </Column>
      </Flex>
    </Column>
  );
}
