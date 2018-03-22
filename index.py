import warnings

with warnings.catch_warnings():
  warnings.filterwarnings("ignore",category=DeprecationWarning)
  from bottle import Bottle, get, post, run, debug, default_app, request, template, static_file, route, url, view

# import mock_task_list as task_list
# import mongo_task_list as task_list

@route('/static/:path#.+#', name='static')
def static(path):
    return static_file(path, root='static')

@route('/')
def hello():
  output = template('dashboard.tpl')
  return output
@route('/display')
def hello():
  output = template('display.tpl')
  return output

# setup()
#application = default_app()
debug(True)
run(host='0.0.0.0', port=8080)