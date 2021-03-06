// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/NavigationContainer/reducer'),
          System.import('containers/NavigationContainer/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          navigationReducer,
          navigationSagas,
          component,
        ]) => {
          injectReducer('navigationContainer', navigationReducer.default);
          injectSagas('navigationContainer', navigationSagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/signup',
          name: 'signupContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/SignupContainer/reducer'),
              System.import('containers/SignupContainer/sagas'),
              System.import('containers/SignupContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('signupContainer', reducer.default);
              injectSagas('signupContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '/about',
      name: 'aboutContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AboutContainer/reducer'),
          System.import('containers/AboutContainer/sagas'),
          System.import('containers/AboutContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('aboutContainer', reducer.default);
          injectSagas('aboutContainer', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/about/modal/:link',
          name: 'modalContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/ModalContainer/reducer'),
              System.import('containers/ModalContainer/sagas'),
              System.import('containers/ModalContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('modalContainer', reducer.default);
              injectSagas('modalContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '/skills',
      name: 'skillsContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SkillsContainer/reducer'),
          System.import('containers/SkillsContainer/sagas'),
          System.import('containers/SkillsContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('skillsContainer', reducer.default);
          injectSagas('skillsContainer', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/comments',
      name: 'commentsContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/CommentsContainer/reducer'),
          System.import('containers/CommentsContainer/sagas'),
          System.import('containers/CommentsContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('commentsContainer', reducer.default);
          injectSagas('commentsContainer', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/comments/add',
          name: 'commentFormContainer',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/CommentFormContainer/reducer'),
              System.import('containers/CommentFormContainer/sagas'),
              System.import('containers/CommentFormContainer'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('commentFormContainer', reducer.default);
              injectSagas('commentFormContainer', sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    }, {
      path: '/contact',
      name: 'contactContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ContactContainer/reducer'),
          System.import('containers/ContactContainer/sagas'),
          System.import('containers/ContactContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('contactContainer', reducer.default);
          injectSagas('contactContainer', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/projects',
      name: 'projectsContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProjectsContainer/reducer'),
          System.import('containers/ProjectsContainer/sagas'),
          System.import('containers/ProjectsContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('projectsContainer', reducer.default);
          injectSagas('projectsContainer', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
