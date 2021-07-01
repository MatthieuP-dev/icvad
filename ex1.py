from http.server import HTTPServer, BaseHTTPRequestHandler
import requests

class first_server(BaseHTTPRequestHandler):

    def do_GET(self):
        response = "pong"
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(response, 'utf-8'))

httpd = HTTPServer(('localhost', 4567), first_server)
httpd.serve_forever()

class second_server(BaseHTTPRequestHandler):
    
    def do_GET(self):
        response = "ping"
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(response, 'utf-8'))

httpd = HTTPServer(('localhost', 5372), second_server)
httpd.serve_forever()