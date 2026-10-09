import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InquiryProvider } from './lib/inquiry';
import { LocaleProvider } from './lib/i18n';
import { catalog } from './lib/catalog';
import { Layout } from './components/layout/Layout';
import { VisualDefs } from './components/visuals/ProductVisual';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';
import InquiryPage from './pages/InquiryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <LocaleProvider catalog={catalog}>
      <InquiryProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
        <VisualDefs />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:slug" element={<ProductDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="capabilities" element={<CapabilitiesPage />} />
            <Route path="quality" element={<QualityPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="request-quote" element={<RequestQuotePage />} />
            <Route path="inquiry" element={<InquiryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </InquiryProvider>
    </LocaleProvider>
  );
}
