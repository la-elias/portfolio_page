"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Flex, Icon } from "@/once-ui/components"; // Adjust import path as needed

interface Skill {
  title: string;
  icon: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  // Create a stable, repeated array so we can loop seamlessly.
  const repeatedSkills = useMemo(() => {
    return [...skills, ...skills];
  }, [skills]);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let scrollAmount = 0;
    let halfScrollWidth = 0;
    const scrollStep = 1; // how many pixels to scroll per tick
    const intervalTime = 30; // speed (ms). lower = faster speed

    const intervalId = setInterval(() => {
      if (!track) return;

      // Calculate half the total scrollable width (only once, unless length changes)
      if (halfScrollWidth === 0) {
        halfScrollWidth = track.scrollWidth / 2;
      }

      scrollAmount += scrollStep;
      // Once we hit half the scroll width, reset to 0
      if (scrollAmount >= halfScrollWidth) {
        scrollAmount = 0;
      }
      track.scrollLeft = scrollAmount;
    }, intervalTime);

    // Cleanup when unmounting or when skills array changes
    return () => clearInterval(intervalId);
  }, [skills.length]); 
  // ^ using skills.length so if the skill list length changes, we re-init the loop.

  return (
    <Flex direction="column" fillWidth overflowX="hidden" marginTop="m" marginBottom="m" paddingX="16">
      <Flex
        ref={trackRef}
        direction="row"
        gap="l"
        overflowX="hidden"
        // Any additional spacing or styling you need
      >
        {repeatedSkills.map((skill, index) => (
          <Flex
            key={`${skill.title}-${index}`}
            align="center"
            padding="m"
          >
            <Icon name={skill.icon} size="l" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
