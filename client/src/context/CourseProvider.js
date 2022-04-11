import { createContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

export const CourseContext = createContext();

// convert pathname to title
export function getTitle(pathname) {
  const path = pathname.split('/');
  let title = path[path.length - 1];
  return title.charAt(0).toUpperCase() + title.slice(1);
}

function CourseProvider({ children }) {
  const { pathname } = useLocation();
  const [categories] = useState([
    {
      title: 'Learn html',
      tag: 'html',
      slug: 'learn-html',
      icon: '/img/courses/html.png',
    },
    {
      title: 'Learn css',
      tag: 'css',
      slug: 'learn-css',
      icon: '/img/courses/css.png',
    },
    {
      title: 'Learn JavaScript',
      tag: 'javascript',
      slug: 'learn-javascript',
      icon: '/img/courses/js.png',
    },
    {
      title: 'Learn TypeScript',
      tag: 'typescript',
      slug: 'learn-typescript',
      icon: '/img/courses/css.png',
    },
    {
      title: 'Learn React js',
      tag: 'react',
      slug: 'learn-react',
      icon: '/img/courses/react.png',
    },
    {
      title: 'Learn React Native',
      tag: 'react-native',
      slug: 'learn-react-native',
      icon: '/img/courses/react-native.png',
    },
    {
      title: 'Learn Vue js',
      tag: 'vue',
      slug: 'learn-vue',
      icon: '/img/courses/vue.png',
    },
    {
      title: 'Learn Node js',
      tag: 'node',
      slug: 'learn-node',
      icon: '/img/courses/node.png',
    },
    {
      title: 'Learn Angular',
      tag: 'angular',
      slug: 'learn-angular',
      icon: '/img/courses/angular.png',
    },
    {
      title: 'Learn Python',
      tag: 'python',
      slug: 'learn-python',
      icon: '/img/courses/python.png',
    },
    {
      title: 'Learn Laravel',
      tag: 'laravel',
      slug: 'learn-laravel',
      icon: '/img/courses/laravel.png',
    },
    {
      title: 'Learn Codeigniter',
      tag: 'codeigniter',
      slug: 'learn-codeigniter',
      icon: '/img/courses/codeigniter.png',
    },
    {
      title: 'Learn Git',
      tag: 'git',
      slug: 'learn-git',
      icon: '/img/courses/git.png',
    },
  ]);

  // get category by tag
  const getCategoryByTag = (tag) => {
    return categories.find((category) => category.tag === tag);
  };

  return (
    <CourseContext.Provider value={{ categories, getCategoryByTag }}>
      <Helmet title={getTitle(pathname) || 'Course Buzz'} />
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider;
