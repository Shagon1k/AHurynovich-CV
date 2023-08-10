// General
import CrossSVG from './images/cross.svg';
import DownloadSVG from './images/download.svg';

// Tech skills
import JSSVG from './images/tech-skills/js.svg';
import TSSVG from './images/tech-skills/ts.svg';
import HTMLSVG from './images/tech-skills/html.svg';
import CSSSVG from './images/tech-skills/css.svg';
import SASSSVG from './images/tech-skills/sass.svg';
import ReactSVG from './images/tech-skills/react.svg';
import ReduxSVG from './images/tech-skills/redux.svg';
import WebpackSVG from './images/tech-skills/webpack.svg';
import JestSVG from './images/tech-skills/jest.svg';
import RTLSVG from './images/tech-skills/rtl.svg';
import AWSSVG from './images/tech-skills/aws.svg';
import GitSVG from './images/tech-skills/git.svg';
import A11ySVG from './images/tech-skills/a11y.svg';

// Reasons
import TeamplayerSVG from './images/reasons/teamplayer.svg';
import ExperiencedSVG from './images/reasons/experienced.svg';
import KnowledgeThirstSVG from './images/reasons/knowledge-thirst.svg';
import ResponsibleSVG from './images/reasons/responsible.svg';
import MentorSVG from './images/reasons/mentor.svg';

// Socials
import FacebookSVG from './images/socials/facebook.svg';
import GithubSVG from './images/socials/github.svg';
import InstagramSVG from './images/socials/instagram.svg';
import LinkedinSVG from './images/socials/linkedin.svg';
import TelegramSVG from './images/socials/telegram.svg';
import TwitterSVG from './images/socials/twitter.svg';
import YoutubeSVG from './images/socials/youtube.svg';

export const ICON_NAME_TO_SVG_MAP = {
    cross: CrossSVG,
    download: DownloadSVG,
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
    xs: 20,
    s: 27,
    m: 35,
    l: 60,
    xl: 100,
} as const;
