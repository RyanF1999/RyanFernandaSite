import ReactGA from 'react-ga';

export function initGA() {
    console.log('GA init');
    ReactGA.initialize('UA-132868588-3');
}

export function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}