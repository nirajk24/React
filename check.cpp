#include <iostream>
#include <vector>
#include <deque>
#include <limits>

using namespace std;

int min_cost_to_reach(int N, vector<vector<char>>& matrix, int Sx, int Sy, int Dx, int Dy) {
    vector<vector<int>> cost(N, vector<int>(N, numeric_limits<int>::max()));
    deque<pair<int, int>> dq;

    // Define direction movements and corresponding characters
    vector<pair<int, int>> directions = {{0, -1}, {0, 1}, {-1, 0}, {1, 0}};
    vector<char> dir_chars = {'L', 'R', 'U', 'D'};

    // Initialize starting point
    cost[Sx][Sy] = 0;
    dq.push_front({Sx, Sy});

    while (!dq.empty()) {
        auto [x, y] = dq.front();
        dq.pop_front();

        for (int k = 0; k < 4; ++k) {
            int nx = x + directions[k].first;
            int ny = y + directions[k].second;

            if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                int new_cost = cost[x][y] + (matrix[x][y] != dir_chars[k]);
                if (new_cost < cost[nx][ny]) {
                    cost[nx][ny] = new_cost;
                    if (matrix[x][y] == dir_chars[k]) {
                        dq.push_front({nx, ny});
                    } else {
                        dq.push_back({nx, ny});
                    }
                }
            }
        }
    }

    return cost[Dx][Dy];
}

int main() {
    int N;
    cin >> N;

    vector<vector<char>> matrix(N, vector<char>(N));
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            cin >> matrix[i][j];
        }
    }

    int Sx, Sy, Dx, Dy;
    cin >> Sx >> Sy >> Dx >> Dy;

    // Adjust for 0-based indexing
    Sx--; Sy--; Dx--; Dy--;

    int result = min_cost_to_reach(N, matrix, Sx, Sy, Dx, Dy);
    cout << result << endl;

    return 0;
}
