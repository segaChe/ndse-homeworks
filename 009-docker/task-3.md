1. Выполнилась автоматически с командой в п.2

2. `docker run --name first_node -i -d -v ./data:/var/first/data node:20 sleep infinity`

   ```
   66452e791505f96f23c14cbb24ec47b53dba735f6499ea8d2921eb6085550cd1
   ```
   
3. `docker run --name second_node -i -d -v ./data:/var/second/data node:20 sleep infinity`

   ```
   214b59a537fcc733d8fd578b293dae96637dd905c50b500e4789eba91a2351a4
   ```
   
4. `docker exec -it first_node /bin/bash`
    
    ```
   ```
   
5. Создан файл _test_host.txt_. 
   ```
   ```

6. `docker exec -it second_node /bin/bash`
   
   ```
   test1.txt  test_host.txt
   ```
   
7. `docker stop second_node first_node`

   ```
   second_node
   first_node
   ```

8. `docker rm second_node first_node`

   ```
   second_node
   first_node
   ```

9. `docker rmi node:20` 

   запускать не стал, чтобы оставить образ и не скачивать его еще раз