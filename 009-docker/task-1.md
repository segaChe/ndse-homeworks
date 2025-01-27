1. Выполнилась автоматически с командой в п.2
2. `docker run --name pinger -it busybox ping -c 7 netology.ru`
    
    ```
    Unable to find image 'busybox:latest' locally
    latest: Pulling from library/busybox
    559c60843878: Pull complete
    Digest: sha256:a5d0ce49aa801d475da48f8cb163c354ab95cab073cd3c138bd458fc8257fbf1
    Status: Downloaded newer image for busybox:latest
    PING netology.ru (51.250.51.8): 56 data bytes
    64 bytes from 51.250.51.8: seq=0 ttl=63 time=33.826 ms
    64 bytes from 51.250.51.8: seq=1 ttl=63 time=35.150 ms
    64 bytes from 51.250.51.8: seq=2 ttl=63 time=33.006 ms
    64 bytes from 51.250.51.8: seq=3 ttl=63 time=34.669 ms
    64 bytes from 51.250.51.8: seq=4 ttl=63 time=80.971 ms
    64 bytes from 51.250.51.8: seq=5 ttl=63 time=125.481 ms
    64 bytes from 51.250.51.8: seq=6 ttl=63 time=34.831 ms
    
    --- netology.ru ping statistics ---
    7 packets transmitted, 7 packets received, 0% packet loss
    round-trip min/avg/max = 33.006/53.990/125.481 ms
    ```

3. `docker ps -a`
    
   ```
    CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
    61e5d2a3bb98   busybox   "ping -c 7 netology.…"   4 minutes ago   Exited (0) 4 minutes ago             pinger
    ```
   
4. `docker logs pinger`
   
    ```
   PING netology.ru (51.250.51.8): 56 data bytes
   64 bytes from 51.250.51.8: seq=0 ttl=63 time=33.826 ms
   64 bytes from 51.250.51.8: seq=1 ttl=63 time=35.150 ms
   64 bytes from 51.250.51.8: seq=2 ttl=63 time=33.006 ms
   64 bytes from 51.250.51.8: seq=3 ttl=63 time=34.669 ms
   64 bytes from 51.250.51.8: seq=4 ttl=63 time=80.971 ms
   64 bytes from 51.250.51.8: seq=5 ttl=63 time=125.481 ms
   64 bytes from 51.250.51.8: seq=6 ttl=63 time=34.831 ms
   
   --- netology.ru ping statistics ---
   7 packets transmitted, 7 packets received, 0% packet loss
   round-trip min/avg/max = 33.006/53.990/125.481 ms
   ```
   
5. `docker start pinger`
   
   ```
   pinger
   ```

6. `docker ps -a`

   ```
   CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
   61e5d2a3bb98   busybox   "ping -c 7 netology.…"   12 minutes ago   Exited (0) 40 seconds ago             pinger
   ```

7. `docker logs pinger`

   ```
   PING netology.ru (51.250.51.8): 56 data bytes
   64 bytes from 51.250.51.8: seq=0 ttl=63 time=33.826 ms
   64 bytes from 51.250.51.8: seq=1 ttl=63 time=35.150 ms
   64 bytes from 51.250.51.8: seq=2 ttl=63 time=33.006 ms
   64 bytes from 51.250.51.8: seq=3 ttl=63 time=34.669 ms
   64 bytes from 51.250.51.8: seq=4 ttl=63 time=80.971 ms
   64 bytes from 51.250.51.8: seq=5 ttl=63 time=125.481 ms
   64 bytes from 51.250.51.8: seq=6 ttl=63 time=34.831 ms
   
   --- netology.ru ping statistics ---
   7 packets transmitted, 7 packets received, 0% packet loss
   round-trip min/avg/max = 33.006/53.990/125.481 ms
   PING netology.ru (51.250.51.8): 56 data bytes
   64 bytes from 51.250.51.8: seq=0 ttl=63 time=34.221 ms
   64 bytes from 51.250.51.8: seq=1 ttl=63 time=34.698 ms
   64 bytes from 51.250.51.8: seq=2 ttl=63 time=48.543 ms
   64 bytes from 51.250.51.8: seq=3 ttl=63 time=34.821 ms
   64 bytes from 51.250.51.8: seq=4 ttl=63 time=34.837 ms
   64 bytes from 51.250.51.8: seq=5 ttl=63 time=49.443 ms
   64 bytes from 51.250.51.8: seq=6 ttl=63 time=94.095 ms
   
   --- netology.ru ping statistics ---
   7 packets transmitted, 7 packets received, 0% packet loss
   round-trip min/avg/max = 34.221/47.236/94.095 ms
   ```

8. Команда `ping` запускалась 2 раза; общее количество отправленных запросов 14

9. `docker rm pinger`

   ```
   pinger
   ```

10. `docker rmi busybox`

   ```
   Untagged: busybox:latest
   Untagged: busybox@sha256:a5d0ce49aa801d475da48f8cb163c354ab95cab073cd3c138bd458fc8257fbf1
   Deleted: sha256:fc0179a204e2d895c81bf7d0a6333986cc74ddcf84cfc3859fa29c50b112a56f
   Deleted: sha256:613e5fc506b927aeaaa9c9c3dc26c0971686e566ce4cab4c4c3181f868061c60
   ```
   