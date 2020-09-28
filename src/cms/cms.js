import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import BiographyPagePreview from './preview-templates/biographyPagePreview'
import ConcertPagePreview from './preview-templates/concertPagePreview'
import RecordingsPagePreview from './preview-templates/recordingsPagePreview'

import withStyledComponentsRendered from "./style-injector/styleInjector"

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview))
CMS.registerPreviewTemplate('biography', withStyledComponentsRendered(BiographyPagePreview))
CMS.registerPreviewTemplate('concerts', withStyledComponentsRendered(ConcertPagePreview))
CMS.registerPreviewTemplate('recordings', withStyledComponentsRendered(RecordingsPagePreview))