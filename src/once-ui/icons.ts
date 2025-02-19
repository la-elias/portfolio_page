import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineClipboard,
  HiOutlineMagnifyingGlass,
  HiCalendar,
  HiOutlineLink,
  HiExclamationTriangle,
  HiEnvelope,
  HiArrowUpRight,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiGlobeAmericas,
} from "react-icons/hi2";

import { RiVisaLine, RiNextjsFill, RiTailwindCssFill, RiSupabaseFill,  } from "react-icons/ri";

import { SiCplusplus, SiPostgresql, SiExpress, SiExpo} from "react-icons/si";

import { FaDiscord, FaGithub, FaGoogle, FaLinkedin, FaXTwitter, FaFigma, FaGitAlt, FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  clipboard: HiOutlineClipboard,
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  google: FaGoogle,
  github: FaGithub,
  email: HiEnvelope,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  globe: HiGlobeAmericas,
  figma: FaFigma,
  git: FaGitAlt,
  react: FaReact,
  node: FaNodeJs,
  python: FaPython,
  js: FaJs,
  html: FaHtml5,
  css: FaCss3Alt,
  docker: FaDocker,
  cplusplus: SiCplusplus,
  postgresql: SiPostgresql,
  express: SiExpress,
  nextjs: RiNextjsFill,
  tailwind: RiTailwindCssFill,
  supabase: RiSupabaseFill,
  expo: SiExpo,
};
