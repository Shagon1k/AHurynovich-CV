// Tech skills
import JSSVG from '@assets/images/icons/tech-skills/js.svg';
import TSSVG from '@assets/images/icons/tech-skills/ts.svg';
import HTMLSVG from '@assets/images/icons/tech-skills/html.svg';
import CSSSVG from '@assets/images/icons/tech-skills/css.svg';
import SASSSVG from '@assets/images/icons/tech-skills/sass.svg';
import ReactSVG from '@assets/images/icons/tech-skills/react.svg';
import ReduxSVG from '@assets/images/icons/tech-skills/redux.svg';
import WebpackSVG from '@assets/images/icons/tech-skills/webpack.svg';
import JestSVG from '@assets/images/icons/tech-skills/jest.svg';
import RTLSVG from '@assets/images/icons/tech-skills/rtl.svg';
import AWSSVG from '@assets/images/icons/tech-skills/aws.svg';
import GitSVG from '@assets/images/icons/tech-skills/git.svg';
import A11ySVG from '@assets/images/icons/tech-skills/a11y.svg';

// Reasons
import TeamplayerSVG from '@assets/images/icons/reasons/teamplayer.svg';
import ExperiencedSVG from '@assets/images/icons/reasons/experienced.svg';
import KnowledgeThirstSVG from '@assets/images/icons/reasons/knowledge-thirst.svg';
import ResponsibleSVG from '@assets/images/icons/reasons/responsible.svg';
import MentorSVG from '@assets/images/icons/reasons/mentor.svg';

// Socials
import FacebookSVG from '@assets/images/icons/socials/facebook.svg';
import GithubSVG from '@assets/images/icons/socials/github.svg';
import InstagramSVG from '@assets/images/icons/socials/instagram.svg';
import LinkedinSVG from '@assets/images/icons/socials/linkedin.svg';
import TelegramSVG from '@assets/images/icons/socials/telegram.svg';
import TwitterSVG from '@assets/images/icons/socials/twitter.svg';
import YoutubeSVG from '@assets/images/icons/socials/youtube.svg';

export const ICON_NAME_TO_SVG_MAP = {
    js: JSSVG,
    ts: TSSVG,
    html: HTMLSVG,
    css: CSSSVG,
    sass: SASSSVG,
    react: ReactSVG,
    redux: ReduxSVG,
    webpack: WebpackSVG,
    jest: JestSVG,
    rtl: RTLSVG,
    aws: AWSSVG,
    git: GitSVG,
    a11y: A11ySVG,
    teamplayer: TeamplayerSVG,
    experienced: ExperiencedSVG,
    knowledgethirst: KnowledgeThirstSVG,
    responsible: ResponsibleSVG,
    mentor: MentorSVG,
    facebook: FacebookSVG,
    github: GithubSVG,
    instagram: InstagramSVG,
    linkedin: LinkedinSVG,
    telegram: TelegramSVG,
    twitter: TwitterSVG,
    youtube: YoutubeSVG,
} as const;

export const ICONS_SIZES_MAP = {
    s: 20,
    m: 35,
    l: 60,
    xl: 100,
} as const;
