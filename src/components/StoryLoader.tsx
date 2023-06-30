
import ContentLoader from 'react-content-loader'

const StoryLoader = () => (
  <ContentLoader
    speed={2}
    width={774}
    height={48}
    viewBox='0 0 774 48'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'

  >
    <circle cx='13' cy='15' r='8' />
    <rect x='37' y='9' rx='5' ry='5' width='273' height='15' />
    <circle cx='14' cy='66' r='8' />
    <rect x='43' y='30' rx='5' ry='5' width='220' height='10' />
  </ContentLoader>
)

export default StoryLoader
