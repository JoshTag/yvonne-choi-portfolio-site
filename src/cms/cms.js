import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'

import withStyledComponentsRendered from "./style-injector/styleInjector"

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview))
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)