cmake_minimum_required(VERSION 3.29)

project(qt_webview)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)
set_property(GLOBAL PROPERTY USE_FOLDERS ON)
set_property(GLOBAL PROPERTY PREDEFINED_TARGETS_FOLDER "CMakeTargets")

file(GLOB_RECURSE SOURCES "*.cpp" "*.cxx" "*.cc")
file(GLOB_RECURSE HEADERS "*.h")
file(GLOB_RECURSE RESOURCES "*.qrc")
file(GLOB_RECURSE FORMS "*.ui")
file(GLOB_RECURSE STAMPS "*.stamp")

source_group("src" FILES ${SOURCES})
source_group("header" FILES ${HEADERS})
source_group("forms" FILES ${FORMS})
source_group("res" FILES ${RESOURCES})
source_group("stamps" FILES ${STAMPS})

# ui*.h文件搜索路径
set(CMAKE_AUTOUIC_SEARCH_PATHS ${PROJECT_SOURCE_DIR}/qt_ui)

set(QT_SRC
        src/main.cpp
        src/mainwindow.cpp
        src/mainwindow.h
        src/devwindow.cpp
        src/devwindow.h
        src/webData/prpd_generator.cpp
        src/webData/prpd_generator.h
        src/webchannel/worker.h
        src/webchannel/worker.cpp
        src/webchannel/apirouter.cpp
        src/webchannel/apirouter.h
        src/websocket/websocketserver.h
        src/websocket/websocketserver.cpp

)

set(QT_UI

)

set(RES
        frontend.qrc
)

set(SRC
        ${QT_SRC}
        ${QT_UI}
        ${RES}
)

# include路径前缀
include_directories(${PROJECT_SOURCE_DIR}/src)
include_directories(${PROJECT_SOURCE_DIR}/src)

# 收集依赖的qt库
set(QT_LIB
        Core
        Widgets
        Gui
        WebEngineWidgets
        WebSockets
)
message(LOG ${CMAKE_PREFIX_PATH})
find_package(Qt6 COMPONENTS REQUIRED
        ${QT_LIB}
)

# 组合连接时的名字
list(TRANSFORM QT_LIB PREPEND "Qt6::" OUTPUT_VARIABLE QT_LIB_LINK)

foreach (item ${QT_LIB_LINK})
    get_target_property(LibLocation ${item} LOCATION)
    get_filename_component(LibDir ${LibLocation} DIRECTORY)
    list(APPEND LIB_LOCATION ${LibLocation})
endforeach ()

add_executable(${PROJECT_NAME} ${SRC})

# 链接库
target_link_libraries(${PROJECT_NAME} PRIVATE ${QT_LIB_LINK})

# target_link_libraries(${PROJECT_NAME} PRIVATE ${QT_LIB_LINK})
set_target_properties(${CMAKE_PROJECT_NAME} PROPERTIES
        WIN32_EXECUTABLE ON
)
