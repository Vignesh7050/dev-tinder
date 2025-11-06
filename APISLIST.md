# DevTinder APIs

## AuthRouter
- POST /signup
- GET /login
- GET /logout

## ProfileRouter
- GET /profile/details
- PATCH /profile/details
- PATCH /profile/password

## ConnectionRequestRouter
- POST /request/send/interested:userId
- POST /request/send/ignored:userId
- POST /request/review/accepted:requestId
- POST /request/review/rejected:requestId

## UserRouter
- GET user/connections
- GET user/requests
- GET user/feed


status: Ignore, Interested, Accepted, Rejected