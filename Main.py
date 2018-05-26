import websocket
try:
    import thread
except ImportError:
    import _thread as thread
import time

def on_message(ws, message):
    global MlkccaWS
    MlkccaWS.send(message)
    print "NODE_RED", message

def on_mlk_message(MlkccaWS, message):
    global ws
    ws.send(message)
    print "MLKCCA",message

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    def run(*args):
        time.sleep(1)
        print "a"
    thread.start_new_thread(run, ())


ws = None
MlkccaWS = None
if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://localhost:1880/comms",
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    thread.start_new_thread(ws.run_forever,())
    MlkccaWS  = websocket.WebSocketApp("wss://pubsub1.mlkcca.com/ws/push/BkbKrOHk7/Ox9XZtLp3QI51eDcwq50mrN7tghBYvVAA81M3tHb?c=demo",
                              on_message = on_mlk_message,  
                              on_error = on_error,
                              on_close = on_close)
    MlkccaWS.on_open = on_open
    thread.start_new_thread(MlkccaWS.run_forever,())
    while True:
	time.sleep(1)
