import json
import uuid

# Helper to format TS file
def generate_ts(innovations, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("import { Innovation } from '../types/innovation';\n\n")
        f.write("export const EXPANSION_INNOVATIONS: Innovation[] = [\n")
        for idx, inv in enumerate(innovations):
            f.write("  {\n")
            for k, v in inv.items():
                if k == 'historical_development' or k == 'contributors' or k == 'sources':
                    # Need careful formatting for lists of objects
                    f.write(f"    {k}: {json.dumps(v, indent=6)[2:-2]},\n")
                elif k == 'predecessors' or k == 'successors' or k == 'aliases' or k == 'tags':
                    f.write(f"    {k}: {json.dumps(v)},\n")
                elif k == 'media':
                    f.write(f"    {k}: {json.dumps(v, indent=6)[2:-2]},\n")
                elif type(v) == str:
                    # properly escape quotes
                    val = json.dumps(v)
                    f.write(f"    {k}: {val},\n")
                else:
                    f.write(f"    {k}: {json.dumps(v)},\n")
            f.write("  },\n")
        f.write("];\n")

print("Created generator script placeholder.")
