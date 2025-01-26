1. Выполнилась автоматически с командой в п.2
   
2. `docker run --name mynode -it --env NAME=Sergei --env SURNAME=Cho node:20 `

   ```
   Unable to find image 'node:20' locally
   20: Pulling from library/node
   e474a4a4cbbf: Pull complete
   d22b85d68f8a: Pull complete
   936252136b92: Pull complete
   94c5996c7a64: Pull complete
   5e8de8f36c90: Pull complete
   12e18fd4fc00: Pull complete
   a96b77eb9bbc: Pull complete
   63184d6e994a: Pull complete
   Digest: sha256:bc3d86568d9a9e062cdf7036367f6e2ce201925e2912758bcd3b0e2657875a63
   Status: Downloaded newer image for node:20
   Welcome to Node.js v20.18.2.
   Type ".help" for more information.
   >
   ```

3. `console.log('Привет, ' + process.env.NAME + ' ' + process.env.SURNAME + '!')`

   ```
   Привет, Sergei Cho!
   undefined
   ```

4. `docker stop mynode`

   ```
   mynode
   ```

5. `docker rmi node:20`

   ```
   Error response from daemon: conflict: unable to remove repository reference "node:20" (must force) - container 4ae9a87af03f is using its referenced image 3b6113435f66
   ```
   
   `docker rm mynode`  
   `docker rmi node:20`

   ```
   Untagged: node:20
   Untagged: node@sha256:bc3d86568d9a9e062cdf7036367f6e2ce201925e2912758bcd3b0e2657875a63
   Deleted: sha256:3b6113435f66e7fe176c9404eeade94596019e35ef45e9dbc117e827f6cb0979
   Deleted: sha256:a4cc010e698660e1b630acfb00b06f7e3a366508249eb4cd436bdbc2e307a619
   Deleted: sha256:c03704114fa01635658d4762ae913206ca96f28bff00aa6e9b02f7928a76a50a
   Deleted: sha256:a2d4064a101ce133ab09a77afb8ba14cf61a85b900d0590f9524058f987645b9
   Deleted: sha256:1e403a9e9e68acd320e9899651969ad5824d74b7e91aea03c4b5a72ff685e8e3
   Deleted: sha256:e133a8c02d85fa528d3124972deda07811d123d2e2e6620d466258fac3b0bb5a
   Deleted: sha256:a62128d0f6d58f694fd7b0f65714af65afafb3c13e4646a03cc20b7f8cab3865
   Deleted: sha256:ec5bb05d69b00344db1d485e17a639281633cc6ec64cfbd6cb4bc8039618f64a
   Deleted: sha256:86d145e933bcdb6c14c873a57906ccde603e9f360e96a4ee4e7a0c8df1b0e82e
   ```
   