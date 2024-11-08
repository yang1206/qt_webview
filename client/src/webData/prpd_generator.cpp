//
// Created by Yang1206 on 2024/10/28.
//

#include "prpd_generator.h"

PRPDGenerator::PRPDGenerator(const Config &config) : m_config(config), m_gen(std::random_device{}()) {
    updateDistributions();
}

void PRPDGenerator::updateConfig(const Config &config) {
    m_config = config;
    updateDistributions();
}

void PRPDGenerator::updateDistributions() {
    m_phase_dist1 = std::normal_distribution<>(m_config.phaseCenter1, m_config.phaseSpread);
    m_phase_dist2 = std::normal_distribution<>(m_config.phaseCenter2, m_config.phaseSpread);
    m_amplitude_dist = std::uniform_real_distribution<>(m_config.amplitudeMin, m_config.amplitudeMax);
}

QByteArray PRPDGenerator::generateBinaryFrame() {
    const size_t pointSize = sizeof(float) * 2 + sizeof(uint16_t); // 4 + 4 + 2 = 10 bytes
    QByteArray buffer;
    buffer.resize(pointSize * m_config.pointsPerFrame);

    auto *points = reinterpret_cast<PRPDPoint *>(buffer.data());

    for (int i = 0; i < m_config.pointsPerFrame; ++i) {
        // 生成相位数据 (0-360度)
        double phase = (m_gen() % 2 == 0) ? m_phase_dist1(m_gen) : m_phase_dist2(m_gen);
        while (phase < 0)
            phase += 360;
        while (phase >= 360)
            phase -= 360;

        // 生成幅值数据 (0-50)
        double amplitude = m_amplitude_dist(m_gen);

        // 生成计数数据 (1-maxCount)
        uint16_t count = 1 + (m_gen() % m_config.maxCount);

        points[i].phase = static_cast<float>(phase);
        points[i].amplitude = static_cast<float>(amplitude);
        points[i].count = count;
    }

    return buffer;
}

QJsonObject PRPDGenerator::generateFrame() {
    QJsonArray points;

    for (int i = 0; i < m_config.pointsPerFrame; ++i) {
        // 生成相位数据 (0-360度)
        double phase = (m_gen() % 2 == 0) ? m_phase_dist1(m_gen) : m_phase_dist2(m_gen);
        while (phase < 0)
            phase += 360;
        while (phase >= 360)
            phase -= 360;

        // 生成幅值数据 (0-50)
        double amplitude = m_amplitude_dist(m_gen);

        // 生成计数数据 (1-maxCount)
        int count = 1 + (m_gen() % m_config.maxCount);

        QJsonObject point;
        point["phase"] = phase;
        point["amplitude"] = amplitude;
        point["count"] = count;
        points.append(point);
    }

    QJsonObject frame;
    frame["points"] = points;
    return frame;
}