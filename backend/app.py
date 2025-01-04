from flask import Flask, request, jsonify
from simulations.rectangular_well import RectangularWell
from simulations.parabolic_barrier import ParabolicBarrier
from simulations.rectangular_barrier import RectangularBarrier
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:8081", "http://127.0.0.1:8081" ]}}, supports_credentials=True)

@app.route('/api/simulate', methods=['POST'])
def simulate():
    data = request.json
    sim_type = data['simulation_type']
    params = data.get('parameters', {})
    steps = data.get('steps', 300)

    if sim_type == 'rectangular_well':
        well_width = params.get("well_width", 1.0)  # or some default
        well_depth = params.get("well_depth", 1.0)  # or some default
        sim = RectangularWell()
        return jsonify(sim.run(well_width, well_depth, steps))

    elif sim_type == 'parabolic_barrier':
        barrier_coefficient = params.get("barrier_coefficient", 0.0001)  # or default

        sim = ParabolicBarrier()
        return jsonify(sim.run(barrier_coefficient, steps))

    elif sim_type == 'rectangular_barrier':
        barrier_width = params.get("barrier_width", 1.0)   # or default
        barrier_height = params.get("barrier_height", 1.0) # or default

        sim = RectangularBarrier()
        return jsonify(sim.run(barrier_width, barrier_height, steps))

    return jsonify({"error": "Invalid simulation type"}), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)