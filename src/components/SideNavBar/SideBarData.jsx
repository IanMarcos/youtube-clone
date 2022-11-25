import {
  Md360,
  MdHistory,
  MdHomeFilled,
  MdOutlineChildCare,
  MdOutlinedFlag,
  MdOutlineFeedback,
  MdOutlineLightbulb,
  MdOutlineOndemandVideo,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdTv,
} from 'react-icons/md';
import {
  BsBroadcast,
  BsCompass,
  BsMusicNoteBeamed,
  BsNewspaper,
  BsPlusCircle,
  BsTrophyFill,
  BsYoutube,
} from 'react-icons/bs';
import {
  IoGameController,
  IoHelpCircleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { SiYoutubemusic } from 'react-icons/si';

const navigationSection = [
  {
    icon: <MdHomeFilled size={26} />,
    text: 'Home',
    hyperlink: '',
  },
  {
    icon: <BsCompass size={22} />,
    text: 'Explore',
    hyperlink: 'https://www.youtube.com/feed/explore',
  },
  {
    icon: <MdOutlineSlowMotionVideo size={24} />,
    text: 'Shorts',
    hyperlink: 'https://www.youtube.com/',
  },
  {
    icon: <MdOutlineOndemandVideo size={22} />,
    text: 'Subscriptions',
    hyperlink: 'https://www.youtube.com/feed/subscriptions',
  },
];

const librariesSection = [
  {
    icon: <MdOutlineVideoLibrary size={22} />,
    text: 'Library',
    hyperlink: 'https://www.youtube.com/feed/library',
  },
  {
    icon: <MdHistory size={24} />,
    text: 'History',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
];

const exploreSection = [
  {
    icon: <BsMusicNoteBeamed size={20} />,
    text: 'Music',
    hyperlink: 'https://www.youtube.com/feed/library',
  },
  {
    icon: <BsTrophyFill size={20} />,
    text: 'Sport',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
  {
    icon: <IoGameController size={22} />,
    text: 'Gaming ',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
  {
    icon: <BsNewspaper size={22} />,
    text: 'News',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
  {
    icon: <BsBroadcast size={22} />,
    text: 'Live',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
  {
    icon: <MdOutlineLightbulb size={22} />,
    text: 'Learning',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
  {
    icon: <Md360 size={22} />,
    text: '360° Videos',
    hyperlink: 'https://www.youtube.com/feed/history',
  },
];

const browseChannelsSection = [
  {
    icon: <BsPlusCircle size={20} />,
    text: 'Browse channels',
    hyperlink: 'https://www.youtube.com/feed/guide_builder',
  },
];

const moreFromYTSection = [
  {
    icon: <BsYoutube size={20} color='#FF0000' />,
    text: 'YouTube Premium',
    hyperlink: 'https://www.youtube.com/premium',
  },
  {
    icon: <SiYoutubemusic size={20} color='#FF0000' />,
    text: 'YouTube Music',
    hyperlink: 'https://music.youtube.com/',
  },
  {
    icon: <MdOutlineChildCare size={20} color='#FF0000' />,
    text: 'YouTube Kids',
    hyperlink: 'https://www.youtubekids.com/',
  },
  {
    icon: <MdTv size={20} color='#FF0000' />,
    text: 'YouTube TV',
    hyperlink: 'https://tv.youtube.com/',
  },
];

const helpSection = [
  {
    icon: <IoSettingsOutline size={22} />,
    text: 'Setting',
    hyperlink:
      'https://accounts.google.com/signin/v2/identifier?service=youtube',
  },
  {
    icon: <MdOutlinedFlag size={22} />,
    text: 'Report history',
    hyperlink: 'https://www.youtube.com/reporthistory',
  },
  {
    icon: <IoHelpCircleOutline size={24} />,
    text: 'Help',
    hyperlink: '',
  },
  {
    icon: <MdOutlineFeedback size={22} />,
    text: 'Send feedback',
    hyperlink: '',
  },
];

export default {
  navigationSection,
  librariesSection,
  exploreSection,
  browseChannelsSection,
  moreFromYTSection,
  helpSection,
};
