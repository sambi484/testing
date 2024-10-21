export default {
    data: () => ({
      title: 'CloudCannon Test Site',
    }),
    render: (h) => (
      <html>
        <head>
          <title>{this.data.title}</title>
        </head>
        <body>
          <h1>{this.data.title}</h1>
        </body>
      </html>
    ),
  };
  