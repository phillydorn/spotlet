
  req:
   {




     _header: 'POST /api/token HTTP/1.1\r\nAuthorization: Basic ZGNiZmZiNjc0MWNhNDY2MGEzYjIzNjUyYzE1NWIyN2E6M2Q3NzkwMTljMTI3NDI4Yzk4MmFlYjI1NGVkMTg1YTU=\r\nhost: accounts.spotify.com\r\ncontent-length: 0\r\nConnection: close\r\n\r\n',
     _headers:
      { authorization: 'Basic ZGNiZmZiNjc0MWNhNDY2MGEzYjIzNjUyYzE1NWIyN2E6M2Q3NzkwMTljMTI3NDI4Yzk4MmFlYjI1NGVkMTg1YTU=',
        host: 'accounts.spotify.com',
        'content-length': 0 },


      },
  request:
   {


     headers:
      { Authorization: 'Basic ZGNiZmZiNjc0MWNhNDY2MGEzYjIzNjUyYzE1NWIyN2E6M2Q3NzkwMTljMTI3NDI4Yzk4MmFlYjI1NGVkMTg1YTU=',
        'content-length': 0 },
     data:
      { grant_type: 'authorization_code',
        code: 'AQCh7JrDLLF9j-yMr2ksrt1A69fbuOc70JtbtTiISbHo0IvNedfVaS-18lm4jPWFkf8FypNEJGI_P6TUzuakEvVhXycCjUtQlGnT9bSMRdiVAe9xyy1ygwXdQ0XQYtKy8HlnRMY7djUpHoKPI0eAU2Jseus__a5mFdpNcDYTnnqd4Qm9tA2ArMTvaTnQ5_psjAK1TIPPJbflRfiMC2Y',
        redirect_uri: 'http://localhost:3000/authorize/callback2' },


     _callbackCalled: true },
  toJSON: [Function: responseToJSON],
  caseless:
   { dict:
      { server: 'nginx',
        date: 'Tue, 22 Sep 2015 21:42:18 GMT',
        'content-type': 'application/json',
        'content-length': '26',
        connection: 'close' } },
  read: [Function],
  body: '\u0000\u0018{"error":"server_error"}'



