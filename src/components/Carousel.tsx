'use client';
import React, { JSX, useState } from 'react';
import {
  Flex,
  IconButton,
  Card,
  Column,
  Text,
  Carousel,
} from "@/once-ui/components"; // adjust imports as needed
import styles from './about/about.module.scss';

interface Project {
  title: string;
  link: string;
  description: JSX.Element;
  images: images[];
}

interface ProjectsCarouselProps {
  projects: Project[];
}
interface images {
  src: string;
  alt: string;
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Flex 
      direction="row"
      gap="40"
      padding="16"
      vertical="center"
      horizontal="center"
      fillWidth
      radius="xl"
      className={styles.carousel}
    >
      {/* Left arrow */}
      <IconButton
        icon="chevronLeft"
        variant="secondary"
        size="m"
        className={styles.arrow}
        onClick={handlePrev}
      />

      {/* Carousel viewport */}
      <Flex
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Inner wrapper that slides horizontally */}
        <Flex
          direction="row"
          style={{
            transform: `translateX(-${currentIndex * 100/ projects.length}%)`,
            transition: 'transform 0.4s ease-in-out',
            minWidth: `${100 * projects.length}%`,
          }}
        >
          {projects.map((project, index) => (
            <Flex
              key={index}
              className={styles.carouselItem}
                style={{
                    width: `calc(100% / ${projects.length})`,
                    flexShrink: 0,
                }}
            >
              {/* Example Card - you can style it to match your needs */}
              <Card
                radius="l-4"
                direction="column"
              >
                <Carousel
                    images={project.images}
                    aspectRatio="16 / 9"
                    fillWidth
                    radius="l"
                />
                <Column fillWidth paddingX="20" paddingY="24" gap="8">
                  <Text variant="body-default-xl">
                    {project.title}
                  </Text>
                  <Text onBackground="neutral-weak" variant="body-default-s">
                    {project.description}
                  </Text>
                </Column>
                {/* Additional row for icons, link buttons, etc. */}
              </Card>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Right arrow */}
      <IconButton
        icon="chevronRight"
        variant="secondary"
        size="m"
        className={styles.arrow}
        onClick={handleNext}
      />
    </Flex>
  );
}
