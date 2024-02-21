import FilterNavigation from '../components/FilterNavigation';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import NewsHighlighted from '../components/NewsHighlighted';
import Pagination from '../components/Pagination';

/* eslint-disable react/jsx-max-depth */
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      `Illo sint voluptas. Error voluptates culpa eligendi.
      Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.
      Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
];

export default function Home() {
  return (
    <div className="bg-white py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Header />
        <FilterNavigation />
        <NewsHighlighted />
        <div
          className="mx-auto mt-2 grid max-w-2xl
          grid-cols-1 gap-x-8 gap-y-16 border-t
          border-gray-200 pt-4 sm:mt-8 sm:pt-8
          lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <NewsGrid />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
