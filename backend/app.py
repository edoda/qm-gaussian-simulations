import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from simulations.rectangular_well import RectangularWell
from simulations.parabolic_barrier import ParabolicBarrier
from simulations.rectangular_barrier import RectangularBarrier

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

frontend_url = os.environ.get("FRONTEND_URL")
if frontend_url:
    print(frontend_url)
    allowed_origins.append(frontend_url)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": allowed_origins}}, supports_credentials=True)

@app.route('/api/simulate', methods=['POST'])
def simulate():
    data = request.json
    sim_type = data['simulation_type']
    params = data.get('parameters', {})
    steps = data.get('steps', 300)

    if sim_type == 'rectangular_well':
        well_width = params.get("well_width", 1.0)
        well_depth = params.get("well_depth", 1.0)
        sim = RectangularWell()
        return jsonify(sim.run(well_width, well_depth, steps))

    elif sim_type == 'parabolic_barrier':
        barrier_coefficient = params.get("barrier_coefficient", 0.0001)

        sim = ParabolicBarrier()
        return jsonify(sim.run(barrier_coefficient, steps))

    elif sim_type == 'rectangular_barrier':
        barrier_width = params.get("barrier_width", 1.0)
        barrier_height = params.get("barrier_height", 1.0)

        sim = RectangularBarrier()
        return jsonify(sim.run(barrier_width, barrier_height, steps))

    return jsonify({"error": "Invalid simulation type"}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)