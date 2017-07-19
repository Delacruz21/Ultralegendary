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
