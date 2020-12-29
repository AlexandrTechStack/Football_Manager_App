const {DataTypes} = require('sequelize')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable({schema: 'football_schema', tableName: 'Users'}, {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING(50)
            },
            firstName: {
                type: DataTypes.STRING(15)
            },
            lastName: {
                type: DataTypes.STRING(20)
            },
            birthDate: {
                type: DataTypes.DATEONLY
            },
            address: {
                type: DataTypes.STRING(50)
            },
            photoURL: {
                type: DataTypes.STRING(100)
            },
            phone: {
                type: DataTypes.STRING(20)
            },
            isApproved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            isPrime: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            salary: {
                type: DataTypes.INTEGER
            },
            currentRole: {
                type: DataTypes.ENUM('admin', 'player', 'coach')
            },
            ClubId: {
                type: DataTypes.INTEGER
            },
            CoachId: {
                type: DataTypes.INTEGER
            },
            LoginId: {
                type: DataTypes.INTEGER
            }
        }, {
            timestamps: false
        },),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Clubs'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING(15)
                },
                address: {
                    type: DataTypes.STRING(50)
                },
                photoURL: {
                    type: DataTypes.STRING(100)
                },
                UserId: {
                    type: DataTypes.INTEGER
                },
                UserId: {
                    type: DataTypes.INTEGER
                }
            }, {
                timestamps: false
            }),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Logins'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                provider: {
                    type: DataTypes.STRING(15)
                },
                token: {
                    type: DataTypes.STRING(100)
                },
                UserId: {
                    type: DataTypes.INTEGER
                }
            }, {
                timestamps: false
            }),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Coaches'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                qualify: {
                    type: DataTypes.STRING(20)
                },
                biography: {
                    type: DataTypes.STRING(200)
                },
                onPosition: {
                    type: DataTypes.DATEONLY
                },
                type: {
                    type: DataTypes.STRING(15)
                },
                isHead: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                },
                ClubId: {
                    type: DataTypes.INTEGER
                }
            }, {
                timestamps: false
            }),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Tasks'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                description: {
                    type: DataTypes.STRING(15)
                },
                startAt: {
                    type: DataTypes.DATEONLY
                },
                endAt: {
                    type: DataTypes.DATEONLY
                },
                feedback: {
                    type: DataTypes.STRING(50)
                },
                mark: {
                    type: DataTypes.INTEGER
                },
                UserId: {
                    type: DataTypes.INTEGER
                }
            }, {
                timestamps: false
            })
    },

     down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users'),
        await queryInterface.dropTable('Clubs'),
        await queryInterface.dropTable('Logins'),
        await queryInterface.dropTable('Coaches'),
        await queryInterface.dropTable('Tasks')
    }
};