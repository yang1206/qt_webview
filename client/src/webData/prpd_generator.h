//
// Created by Yang1206 on 2024/10/28.
//

#ifndef PRPD_GENERATOR_H
#define PRPD_GENERATOR_H

#include <QJsonArray>
#include <QJsonObject>
#include <random>

class PRPDGenerator {
public:
    struct Config {
        double phaseCenter1;
        double phaseCenter2;
        double phaseSpread;
        double amplitudeMin;
        double amplitudeMax;
        int maxCount;
        int pointsPerFrame;

        Config() :
            phaseCenter1(90.0), phaseCenter2(270.0), phaseSpread(20.0), amplitudeMin(10.0), amplitudeMax(40.0),
            maxCount(10), pointsPerFrame(3000) {}
    };

    explicit PRPDGenerator(const Config &config = Config());

    void updateConfig(const Config &config);
    QJsonObject generateFrame();
    QByteArray generateBinaryFrame();

private:
    Config m_config;
    std::mt19937 m_gen;
    std::normal_distribution<> m_phase_dist1;
    std::normal_distribution<> m_phase_dist2;
    std::uniform_real_distribution<> m_amplitude_dist;

    void updateDistributions();


#pragma pack(push, 1)
    struct PRPDPoint {
        float phase; // 4 bytes
        float amplitude; // 4 bytes
        uint16_t count; // 2 bytes
    };
#pragma pack(pop)
};

#endif // PRPD_GENERATOR_H
