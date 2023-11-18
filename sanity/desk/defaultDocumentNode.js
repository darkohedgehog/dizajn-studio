


const { DefaultDocumentNodeResolver } = require('sanity/desk');
const Iframe = require('sanity-plugin-iframe-pane');

const defaultDocumentNode = (S, { schemaType }) => {
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: 'http://localhost:3000/api/preview',
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

module.exports = defaultDocumentNode;
