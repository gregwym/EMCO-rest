# EMCO-rest

Restful web API for EMCO database.

## URL Schema

- http://localhost:3000/vendor
- http://localhost:3000/vendor/<vendor_id>
- http://localhost:3000/vendor/<vendor_id>/products
- http://localhost:3000/product/<product_id>
- http://localhost:3000/product/<product_id>/documents
- http://localhost:3000/document/<document_id>

## Sample Output

### http://localhost:3000/vendor

```
[
  {
    "status": 0,
    "address": null,
    "id": 1,
    "name": "Arcoaire",
    "url": "www.goarcoaire.com",
    "logo": "arcoaireLogo.png"
  },
  {
    "status": 0,
    "address": null,
    "id": 2,
    "name": "Aeroflow Inc.",
    "url": "www.aeroflo.com",
    "logo": "aeroflowLogo.png"
  },
  {
    "status": 2,
    "address": null,
    "id": 4,
    "name": "Deflecto",
    "url": "www.deflecto.com/air-distribution/",
    "logo": "deflectoLogo.png"
  },
  ...
]
```

### http://localhost:3000/vendor/2

```
{
  "status": 0,
  "address": null,
  "id": 2,
  "name": "Aeroflow Inc.",
  "url": "www.aeroflo.com",
  "logo": "aeroflowLogo.png"
}
```

### http://localhost:3000/vendor/6/products

```
[
  {
    "Image": "Model [165 ].png",
    "pType": 9,
    "id": 22,
    "name": "165 Series Water Softener",
    "vID": 6,
    "price": 1,
    "pricePer": "unit"
  },
  {
    "Image": "Model [465 Series Water Softener].png",
    "pType": 9,
    "id": 23,
    "name": "465 Series Water Softener",
    "vID": 6,
    "price": 1,
    "pricePer": "unit"
  },
  ...
]
```

### http://localhost:3000/product/23

```
{
  "Image": "Model [465 Series Water Softener].png",
  "pType": 9,
  "id": 23,
  "name": "465 Series Water Softener",
  "vID": 6,
  "price": 100,
  "pricePer": "unit"
}
```
