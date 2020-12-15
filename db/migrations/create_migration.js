const {DataTypes} = require('sequelize')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable({schema: 'football_schema', tableName: 'Users'}, {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                //allowNull: false
            },
            email: {
                type: DataTypes.STRING(30),
                //allowNull: false
            },
            firstName: {
                type: DataTypes.STRING(15),
                //allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(20),
                //allowNull: false
            },
            birthDate: {
                type: DataTypes.DATE,
                //allowNull: false
            },
            address: {
                type: DataTypes.STRING(50),
                //allowNull: false
            },
            photoURL: {
                type: DataTypes.STRING(100),
                //allowNull: false
            },
            phone: {
                type: DataTypes.STRING(20),
                //allowNull: false
            },
            isApproved: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
                //allowNull: false
            },
            isPrime: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
                //allowNull: false
            },
            salary: {
                type: DataTypes.INTEGER,
                //allowNull: false
            },
            currentRole: {
                type: DataTypes.ENUM('admin', 'player', 'coach'),
                //allowNull: false
            },
            ClubId: {
                type: DataTypes.INTEGER,
                //allowNull: false
            },
            CoachId: {
                type: DataTypes.INTEGER,
                //allowNull: false
            }
        }, {
            timestamps: false
        },),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Clubs'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    //allowNull: false
                },
                name: {
                    type: DataTypes.STRING(15),
                    //allowNull: false
                },
                address: {
                    type: DataTypes.STRING(50),
                    //allowNull: false
                },
                photoURL: {
                    type: DataTypes.STRING(100),
                    //allowNull: false
                }
            }, {
                timestamps: false
            }),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Logins'}, {
                provider: {
                    type: DataTypes.STRING(15),
                    //allowNull: false
                },
                token: {
                    type: DataTypes.STRING(30),
                    //allowNull: false
                },
                login: {
                    type: DataTypes.STRING(15),
                    //allowNull: false
                },
                password: {
                    type: DataTypes.STRING(15),
                    //allowNull: false
                },
                UserId: {
                    type: DataTypes.INTEGER,
                    //allowNull: false
                }
            }, {
                timestamps: false
            }),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Coaches'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    //allowNull: false
                },
                qualify: {
                    type: DataTypes.STRING(20),
                    //allowNull: false
                },
                biography: {
                    type: DataTypes.STRING(200),
                    //allowNull: false
                },
                onPosition: {
                    type: DataTypes.DATE,
                    //allowNull: false
                },
                type: {
                    type: DataTypes.STRING(15),
                    //allowNull: false
                },
                isHead: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                    //allowNull: false
                },
                ClubId: {
                    type: DataTypes.INTEGER,
                    //allowNull: false
                }
            }, {
                timestamps: false
            }),
            await queryInterface.createTable({schema: 'football_schema', tableName: 'Tasks'}, {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    //allowNull: false
                },
                description: {
                    type: DataTypes.STRING(15),
                    //allowNull: false
                },
                startAt: {
                    type: DataTypes.DATE,
                    //allowNull: false
                },
                endAt: {
                    type: DataTypes.DATE,
                    //allowNull: false
                },
                feedback: {
                    type: DataTypes.STRING(50),
                    //allowNull: false
                },
                mark: {
                    type: DataTypes.INTEGER,
                    //allowNull: false
                },
                UserId: {
                    type: DataTypes.INTEGER,
                    //allowNull: false
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


/*module.exports = {
    up: (queryInterface, Sequelize) => {
        return (
            queryInterface.createTable(User.tableName, User._attributes),
                queryInterface.createTable(Club.tableName, Club._attributes),
                queryInterface.createTable(Coach.tableName, Coach._attributes),
                queryInterface.createTable(Task.tableName, Task._attributes),
                queryInterface.createTable(Login.tableName, Login._attributes)
        )

    },
    down: (queryInterface) => {
        return (
            queryInterface.dropTable('User'),
                queryInterface.dropTable('Club'),
                queryInterface.dropTable('Coach'),
                queryInterface.dropTable('Task'),
                queryInterface.dropTable('Login')
        )
    }
};*/