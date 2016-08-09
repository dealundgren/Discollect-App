'use strict';

zipcodeArrayBuilder = function zipcodeArrayBuilder(zipcode) {
  var api = 'ZuYPOXpKUE8RDdLyX8t3MuU3bDjg70N6uMWjKl4E0dwDqicoqFrdamhl0AC7Bqe6';

  var request = 'https://www.zipcodeapi.com/rest/' + api + '/radius.json/' + zipcode + '/50/miles';
  fetch(request).then(function (response) {
    return response.json();
  }).then(function (zipcodes) {
    console.log(zipcodes);
    // also get this into the state
  }).catch(function (err) {
    if (err) {
      console.log(err);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL2FjdGlvbnMvemlwY29kZUhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNCQUFzQiw2QkFBQyxPQUFELEVBQWE7QUFDakMsTUFBTSxNQUFNLGtFQUFaOztBQUVBLE1BQU0sVUFBVSxxQ0FBcUMsR0FBckMsR0FBMkMsZUFBM0MsR0FBNkQsT0FBN0QsR0FBdUUsV0FBdkY7QUFDRSxRQUFNLE9BQU4sRUFDQyxJQURELENBQ00sVUFBQyxRQUFEO0FBQUEsV0FBYyxTQUFTLElBQVQsRUFBZDtBQUFBLEdBRE4sRUFFQyxJQUZELENBRU0sVUFBQyxRQUFELEVBQWM7QUFDbEIsWUFBUSxHQUFSLENBQVksUUFBWjtBQUNBO0FBQ0QsR0FMRCxFQU1DLEtBTkQsQ0FNTyxVQUFDLEdBQUQsRUFBUztBQUNkLFFBQUksR0FBSixFQUFTO0FBQ1AsY0FBUSxHQUFSLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FWRDtBQVdELENBZkgiLCJmaWxlIjoiemlwY29kZUhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInppcGNvZGVBcnJheUJ1aWxkZXIgPSAoemlwY29kZSkgPT4ge1xyXG4gIGNvbnN0IGFwaSA9ICdadVlQT1hwS1VFOFJEZEx5WDh0M011VTNiRGpnNzBONnVNV2pLbDRFMGR3RHFpY29xRnJkYW1obDBBQzdCcWU2JztcclxuXHJcbiAgY29uc3QgcmVxdWVzdCA9ICdodHRwczovL3d3dy56aXBjb2RlYXBpLmNvbS9yZXN0LycgKyBhcGkgKyAnL3JhZGl1cy5qc29uLycgKyB6aXBjb2RlICsgJy81MC9taWxlcyc7XHJcbiAgICBmZXRjaChyZXF1ZXN0KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoemlwY29kZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coemlwY29kZXMpO1xyXG4gICAgICAvLyBhbHNvIGdldCB0aGlzIGludG8gdGhlIHN0YXRlXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiJdfQ==